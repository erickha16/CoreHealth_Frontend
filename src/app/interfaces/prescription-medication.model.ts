export interface PrescriptionMedication {
  id: number;
  prescriptionId: number;
  medicationId: number;
  medicationName: string;
  dosage: string;
  frequency: string;
  duration: string;
}
