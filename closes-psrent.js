// https://stackoverflow.com/questions/64026093/get-nearest-parent-object-in-nested-array
const items = [
    {
        "id": 1,
        "name": "Menu 1",
        "content": [
            {
                "id": 2,
                "name": "Submenu 1 OF 1",
                "url": "teste"
            }
        ]
    },
    {
        "id": 3,
        "name": "Menu 2",
        "content": [
            {
                "id": 4,
                "name": "Submenu 1 OF 2",
                "url": "teste"
            },
            {
                "id": 5,
                "name": "Submenu 2 OF 2",
                "content": [
                    {
                        "id": 6,
                        "name": "Sub submenu 1 OF 2",
                        "url": "teste"
                    },
                    {
                        "id": 7,
                        "name": "Sub submenu 2 OF 2",
                        "url": "teste"
                    },
                ]
            }
        ]
    }
];

function findParentItem(chikdIdNumber, mainArray) {
    // const dataStruct = {
    //     'root': [1,3],
    //     'L1-ID1': [2],
    //     'L1-ID3': [4,5],
    //     'L2-ID2': null,
    //     'L2-ID4': null,
    //     'L2-ID5': [6,7],
    //     'L3-ID6': null,
    //     'L3-ID7': null,
    // }

    let dataStruct = { root: [] };
    let level = 'root';
    let perv_level = null;

    mainArray.forEach(itemInLevel => {
        dataStruct[level].push(itemInLevel.id);
    });

    if (dataStruct.root.length > 0) {
        level = 1;
        perv_level= 'root';
        dataStruct.root.forEach((idInRoot) => {
            dataStruct[`L${level}ID${idInRoot}`] = [];
            const theItemChildrenArray = mainArray.find(item => item.id === idInRoot).content;

            if (theItemChildrenArray && theItemChildrenArray.length > 0) {
                theItemChildrenArray.forEach(child => {
                    dataStruct[`L${level}ID${idInRoot}`].push(child.id);
                })
            }
        })
    }
    if (dataStruct.root.length > 0) {
        level = 1;
        perv_level= 'root';
        dataStruct.root.forEach((idInRoot) => {
            dataStruct[`L${level}ID${idInRoot}`] = [];
            const theItemChildrenArray = mainArray.find(item => item.id === idInRoot).content;

            if (theItemChildrenArray && theItemChildrenArray.length > 0) {
                theItemChildrenArray.forEach(child => {
                    dataStruct[`L${level}ID${idInRoot}`].push(child.id);
                })
            }
        })
    }
    console.debug('dataStruct',dataStruct.L1ID3)

    //let level = root;
    //make an array of item in root
    //level = 1
    //for each item in root array , make a array from its direct childs
    //increase level and repeat for each child
}

findParentItem(2, items);