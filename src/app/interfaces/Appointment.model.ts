export interface Appointment {
    id: number,
    date: Date,
    patientId: number,
    clinicId: number,
    reason: string,
    diagnostic: string | null,
    treatment: string | null,
    serviceId: string | null,
}