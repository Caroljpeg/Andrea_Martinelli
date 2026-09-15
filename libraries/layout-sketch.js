//            ▒▒▓▓▓▓▓▓▓▒▒▒         
//        ▒▓▓███▓▓▓▓▓▓▒▒▒▒▒▒▒      
//     ▒▓████▓▒                    
//    ▓████▓▒                      
//   ▓████▓     ▒▓▓████████▓▓▒     
//  ▓████▓    ▓███████████████▓▒   
// ▒▓████▒   ▓███▓░       ▒▓████▓░ 
// ▒████▓   ░▓██▓           ▓████▓░
// ▒████▓    ▓█▓             ▓████▒
// ▒████▓    ▓██▒            ▓████▒
// ▒████▓    ▒▓██▓▓▒▒▒▒░    ▒█████▒
// ▒█████▓    ░▒▓▓█▓▓▒░    ▒█████▓░
//  ▓█████▓               ▓██████▒ 
//  ▒▓█████▓▒           ▓▓█████▓▒  
//   ▒▓█████████▓▓▓▓▓█████████▓    
//     ▒▓██████████████████▓▒      
//         ▒▒▓▓▓▓▓▓▓▓▓▓▒▒          

// ©2026 Andrea Martinelli
// a website by Andrea Martinelli (@carol__jpg)
// https://caroljpeg.github.io/Andrea_Martinelli/index.html


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
    nameTop: 5,
    rootStartTop: 20,
    itemGap: 5,

    nameLeft: 5,
    rootLeft: 20,
    subSectionLeft: 40,
    linkLeft: 60
};

const treeStateKey = 'treeState';

// Holds one <g> per parent group so each submenu's lines can be
// redrawn independently instead of wiping the whole SVG every time.
const lineGroups = {};

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

function getGroupLayer(parentId) {
    const svg = element('connectorLines');
    let group = lineGroups[parentId];

    if (!group) {
        group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('data-parent', parentId);
        svg.appendChild(group);
        lineGroups[parentId] = group;
    }

    return group;
}

function drawConnectorPath(points, group, animate) {
    if (!group || points.length === 0) return;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const pathData = points
        .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
        .join(' ');

    path.setAttribute('d', pathData);
    group.appendChild(path);

    const length = path.getTotalLength();
    path.style.setProperty('--length', length);

    if (animate) {
        path.classList.add('drawing');
    } else {
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = 0;
    }
}

function drawConnectorGroup(parentId, childIds, animate) {
    const parent = element(parentId);
    const group = getGroupLayer(parentId);
    group.innerHTML = ''; // clears only this group's lines

    const visibleChildren = childIds.map(element).filter(isVisible);
    if (!isVisible(parent) || visibleChildren.length === 0) return;

    const parentBox = parent.getBoundingClientRect();
    const branchGap = 10;
    const startOffset = 6;
    const trunkX = parentBox.left;
    const trunkStartY = parentBox.bottom + startOffset;

    visibleChildren.forEach((child) => {
        const childBox = child.getBoundingClientRect();
        const childY = childBox.top + childBox.height / 2;
        const branchEndX = childBox.left - branchGap;

        // trunk + branch drawn as a single continuous path
        drawConnectorPath([
            { x: trunkX, y: trunkStartY },
            { x: trunkX, y: childY },
            { x: branchEndX, y: childY }
        ], group, animate);
    });
}

function updateConnectorLines(animateGroup) {
    drawConnectorGroup('name', sectionIds, animateGroup === 'name');
    drawConnectorGroup('work', workSubSectionIds, animateGroup === 'work');
    drawConnectorGroup('projects', projectLinkIds, animateGroup === 'projects');
    drawConnectorGroup('misc', miscLinkIds, animateGroup === 'misc');
    drawConnectorGroup('contacts', contactSubSectionIds, animateGroup === 'contacts');
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

function updateLayout(animateGroup) {

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

    updateConnectorLines(animateGroup);
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
    updateLayout('name');
}

function revealSubSections() {
    subSectionsOpen = !subSectionsOpen;
    if (!subSectionsOpen) {
        projectsOpen = false;
        miscOpen = false;
    }
    saveTreeState();
    updateLayout('work');
}

function revealProjects() {
    projectsOpen = !projectsOpen;
    saveTreeState();
    updateLayout('projects');
}

function revealMisc() {
    miscOpen = !miscOpen;
    saveTreeState();
    updateLayout('misc');
}

function revealContacts() {
    contactsOpen = !contactsOpen;
    saveTreeState();
    updateLayout('contacts');
}

function initLayout() {
    restoreTreeState();
    updateLayout(); // no animation on initial load
}

window.addEventListener('load', initLayout);
window.addEventListener('pageshow', initLayout);
window.addEventListener('resize', () => updateConnectorLines());