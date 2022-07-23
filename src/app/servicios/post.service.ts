import { Injectable } from '@angular/core';
//importamos clases para trabajar ocn Firebase:
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { rejects } from 'assert';
import { resolve } from 'dns';
//importamos el modelo creado en FB:
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore: AngularFirestore) { }
 //Metodos para el crud:
 getPosts(){
  return this.angularFirestore
        .collection("posts")
        .snapshotChanges();
 }
 getPostsById(id){
  return this.angularFirestore
        .collection("posts")
        .doc(id)
        .valueChanges();
 }
 createPost(post: Post){
  return new Promise<any> ((resolve,rejects) => {
    this.angularFirestore
      .collection("posts")
      .add(post)
      .then((response)=>{
        console.log(response)
      },
      (error)=>{
        rejects(error)
      })
  }); 
 }
 updatePost(post: Post, id){
  return this.angularFirestore
        .collection("posts")
        .doc(id)
        .update({
          titulo: post.titulo,
          descripcion: post.descripcion,
          fin: post.fin,
          img: post.img,
          inicio: post.inicio,
          institucion: post.institucion,
          url: post.url
        });
 }

 deletePost(post){
  return  this.angularFirestore
            .collection("posts")
            .doc(post.id)
            .delete();
 }
}
