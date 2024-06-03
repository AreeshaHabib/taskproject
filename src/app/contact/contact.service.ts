import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private firestore: AngularFirestore) { }

  addContact(contact: Contact) {
    return this.firestore.collection('contacts').add(contact);
  }
}