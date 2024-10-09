import { apiConfig } from "../services/api-config";
import { daySchedules } from "../load/load-schedules";
import { closeForm } from "../buttons/cancel-scheduling";

const clientName = document.querySelector("#clientName")
const petName = document.querySelector("#petName")
const clientPhone = document.querySelector("#clientPhone")
const serviceInfo = document.querySelector("#serviceInfo")
const dateForm = document.querySelector("#date-form")
const timeForm = document.querySelector("#time")

export async function newSchedule({ id, name, date, service, pet, phone, time}) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}/schedules`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, name, pet, phone, service, date, time })
      }
    )

    await daySchedules()

    clientName.value  = ""
    petName.value     = ""
    clientPhone.value = ""
    serviceInfo.value = ""
    dateForm.value    = ""
    timeForm.value    = ""

    closeForm()

    if(response.ok)
      alert("Appointment successfully scheduled!")

  } catch (error) {
    console.log(error)
    alert("It wasn't possible to schedule the appointment. Try again later")
  }
}