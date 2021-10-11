import { firestore } from "@lib/firebase";

const collectionRef = firestore.collection('course_reviews');

export class ApprovalService {
   static async approveReviewByID(reviewId: string):Promise<string |undefined>{
     try {
       await collectionRef.doc(reviewId).update({_isApproved:true})
      }
      catch(error){
        return `Cannot approve due to server error ${error}`
      } 
}
}