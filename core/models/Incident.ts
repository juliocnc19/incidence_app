export default interface Incident {
  id: number
  title: string
  description: string
  status_id: 1|2|3
  response: string
  user_id: number
  created_at: string
  updated_at: string
}
