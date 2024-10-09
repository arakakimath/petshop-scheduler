import { apiConfig } from "../services/api-config";
import { daySchedules } from "../load/load-schedules";

export async function removeSchedule(id) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`,{
      method: "DELETE"
    })

    await daySchedules();
    alert("Schedule successfully deleted.")
  } catch (error) {
    console.log(error)
    alert("Schedule not cancelled")
  }
}