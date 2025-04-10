import Incident from "../../core/models/Incident"

export type InputIncident = {
  title:Incident["title"],
  description:Incident['description']
}
