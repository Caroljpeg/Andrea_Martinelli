let sectionsOpen = true;
let subSectionsOpen = false;
let projectsOpen = false;
let miscOpen = false;
let contactsOpen = false;

const sectionIds = ['about', 'work', 'contacts'];
const workSubSectionIds = ['projects', 'misc'];
const projectLinkIds = ['project01', 'project02', 'project03', 'project04', 'project05'];
const miscLinkIds = ['misc01', 'misc02'];
const contactSubSectionIds = ['email', 'phone', 'instagram'];

const layoutSettings = {
    nameTop: 2,
    rootStartTop: 20,
    itemGap: 5,
    
    nameLeft: 5,
    rootLeft: 25,
    subSectionLeft: 50,
    linkLeft: 75
};

const treeStateKey = 'treeState';

function saveTreeState() {
    try {
        sessionStorage.setItem(treeStateKey, JSON.stringify({
            sectionsOpen,
            subSectionsOpen,
            projectsOpen,
            miscOpen,
            contactsOpen
        }));
    } catch (e) {
    }
}

function restoreTreeState() {
    try {
        const saved = sessionStorage.getItem(treeStateKey);
        if (!saved) return;

        const state = JSON.parse(saved);
        sectionsOpen = state.sectionsOpen ?? sectionsOpen;
        subSectionsOpen = state.subSectionsOpen ?? subSectionsOpen;
        projectsOpen = state.projectsOpen ?? projectsOpen;
        miscOpen = state.miscOpen ?? miscOpen;
        contactsOpen = state.contactsOpen ?? contactsOpen;
    } catch (e) {
        // ignore malformed/missing data
    }
}

function element(id) {
    return document.getElementById(id);
}

function isVisible(node) {
    return node && getComputedStyle(node).display !== 'none';
}

function clearConnectorLines() {
    const lineLayer = element('connectorLines');
    if (lineLayer) lineLayer.innerHTML = '';
}

function drawConnectorPath(points) {
    const lineLayer = element('connectorLines');
    if (!lineLayer || points.length === 0) return;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const pathData = points
        .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
        .join(' ');

    path.setAttribute('d', pathData);
    lineLayer.appendChild(path);
}

function drawConnectorGroup(parentId, childIds) {
    const parent = element(parentId);
    const visibleChildren = childIds.map(element).filter(isVisible);

    if (!isVisible(parent) || visibleChildren.length === 0) return;

    const parentBox = parent.getBoundingClientRect();
    const branchGap = 10;
    const startOffset = 6;
    const trunkX = parentBox.left;
    const trunkStartY = parentBox.bottom + startOffset;
    const lastChildBox = visibleChildren[visibleChildren.length - 1].getBoundingClientRect();
    const trunkEndY = lastChildBox.top + lastChildBox.height / 2;

    drawConnectorPath([
        { x: trunkX, y: trunkStartY },
        { x: trunkX, y: trunkEndY }
    ]);

    visibleChildren.forEach((child) => {
        const childBox = child.getBoundingClientRect();
        const childY = childBox.top + childBox.height / 2;
        const branchEndX = childBox.left - branchGap;

        drawConnectorPath([
            { x: trunkX, y: childY },
            { x: branchEndX, y: childY }
        ]);
    });
}

function updateConnectorLines() {
    clearConnectorLines();
    drawConnectorGroup('name', sectionIds);
    drawConnectorGroup('work', workSubSectionIds);
    drawConnectorGroup('projects', projectLinkIds);
    drawConnectorGroup('misc', miscLinkIds);
    drawConnectorGroup('contacts', contactSubSectionIds);
}

function placeItem(id, top, left) {
    const item = element(id);
    item.style.top = top + 'vh';
    item.style.left = left + 'vw';
}

function placeVerticalList(ids, startTop, left) {
    let nextTop = startTop;

    ids.forEach((id) => {
        placeItem(id, nextTop, left);
        nextTop += layoutSettings.itemGap;
    });

    return nextTop;
}

function updateLayout() {

    // if sectionsOpen is true, the display style is "block", otherwise is "none"
    element('about').style.display = sectionsOpen ? 'block' : 'none';
    element('work').style.display = sectionsOpen ? 'block' : 'none';
    element('contacts').style.display = sectionsOpen ? 'block' : 'none';

    element('projects').style.display = (sectionsOpen && subSectionsOpen) ? 'block' : 'none';
    element('misc').style.display = (sectionsOpen && subSectionsOpen) ? 'block' : 'none';

    const projectLinksVisible = sectionsOpen && subSectionsOpen && projectsOpen;
    projectLinkIds.forEach((id) => {
        element(id).style.display = projectLinksVisible ? 'block' : 'none';
    });

    const miscLinksVisible = sectionsOpen && subSectionsOpen && miscOpen;
    miscLinkIds.forEach((id) => {
        element(id).style.display = miscLinksVisible ? 'block' : 'none';
    });

    const contactsVisible = sectionsOpen && contactsOpen;
    element('email').style.display = contactsVisible ? 'block' : 'none';
    element('phone').style.display = contactsVisible ? 'block' : 'none';
    element('instagram').style.display = contactsVisible ? 'block' : 'none';

    placeItem('name', layoutSettings.nameTop, layoutSettings.nameLeft);

    let nextTop = layoutSettings.rootStartTop;
    nextTop = placeVerticalList(['about', 'work'], nextTop, layoutSettings.rootLeft);

    if (subSectionsOpen) {
        nextTop = placeVerticalList(['projects'], nextTop, layoutSettings.subSectionLeft);

        if (projectsOpen) {
            nextTop = placeVerticalList(projectLinkIds, nextTop, layoutSettings.linkLeft);
        }

        nextTop = placeVerticalList(['misc'], nextTop, layoutSettings.subSectionLeft);

        if (miscOpen) {
            nextTop = placeVerticalList(miscLinkIds, nextTop, layoutSettings.linkLeft);
        }
    }

    nextTop = placeVerticalList(['contacts'], nextTop, layoutSettings.rootLeft);

    if (contactsOpen) {
        placeVerticalList(contactSubSectionIds, nextTop, layoutSettings.subSectionLeft);
    }

    updateConnectorLines();
}

function revealSections() {
    sectionsOpen = !sectionsOpen;
    if (!sectionsOpen) {
        subSectionsOpen = false;
        projectsOpen = false;
        miscOpen = false;
        contactsOpen = false;
    }
    saveTreeState();
    updateLayout();
}

function revealSubSections() {
    subSectionsOpen = !subSectionsOpen;
    if (!subSectionsOpen) {
        projectsOpen = false;
        miscOpen = false;
    }
    saveTreeState();
    updateLayout();
}

function revealProjects() {
    projectsOpen = !projectsOpen;
    saveTreeState();
    updateLayout();
}

function revealMisc() {
    miscOpen = !miscOpen;
    saveTreeState();
    updateLayout();
}

function revealContacts() {
    contactsOpen = !contactsOpen;
    saveTreeState();
    updateLayout();
}

function initLayout() {
    restoreTreeState();
    updateLayout();
}

window.addEventListener('load', initLayout);
window.addEventListener('pageshow', initLayout);
window.addEventListener('resize', updateConnectorLines);