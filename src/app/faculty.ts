import { FileHandle } from "./model/file-handle";

export class Faculty {
 "id": number;
     "firstName":string;
	 "lastName": string;
	 "email":string;
	 "phoneNumber":string;
    "experience": number;
    "qualification":string;
    "researchPublications":string;
    "researchGuidance":string;
    "achievements":string;
    "facultyimages":FileHandle[]=[];
    "designation" :string;
    "noofpublications":number;
    "noofpatent":number;
    "noofbookchapters":number;
	
     
}
