export interface Part {
  id: string;
  name: string;
  description: string
  quantity: number
  image: string
  weight: number
  criticalPart: boolean
  category: string
  fieldReviews: FieldReview[]
  createdDate: Date
}

export interface FieldReview {
  id: string;
  date: string;
  title: string;
  comment: string;
  rating: number;
}
