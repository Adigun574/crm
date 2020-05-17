export interface Lead{
  Email: string;
  Phone: string;
  FirstName: string;
  LastName: string;
  Company: string;
  Address: string;
  Gender: string;
  Image: string;
  Message: Message[];
  ID: number;
  UserCreated: number;
  UserModified: number;
  DateCreated: string;
  DateModified: string
}

export interface Message{
    Type: string;
    Summary: string;
    LeadID: number;
    ID: number;
    UserCreated: number;
    UserModified: number;
    DateCreated: string;
    DateModified: string
}