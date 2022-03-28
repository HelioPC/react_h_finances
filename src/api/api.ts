import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

import { firebaseConfig } from "../firebase/firebaseConfig";
import { Item } from '../types/Item';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const api = {
    loadItems: async ( setList: (list: Item[]) => void ) => {
        let list: Item[] = [];

        let results = await db.collection('item').get();

        results.forEach(result => {
            let data = result.data();

            for(let i=0; i < data.elements.length; i++) {
                list.push({
                    date: new Date(data.elements[i].date.seconds * 1000),
                    category: data.elements[i].category,
                    title: data.elements[i].title,
                    value: data.elements[i].value
                });
            }
        });

        setList(list);
    },
    addItem: async (item: Item) => {
        db.collection('item').doc('p8bnSK4hZvgZQKdTcXpF').update({
            elements: firebase.firestore.FieldValue.arrayUnion({
                category: item.category,
                value: item.value,
                title: item.title,
                date: firebase.firestore.Timestamp.fromDate(item.date)
            })
        });
    },
};

export default api;
