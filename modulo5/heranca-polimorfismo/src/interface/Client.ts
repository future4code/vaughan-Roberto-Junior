

export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;

    calculateBill(): number;
  }

  export const client: Client = {
    name: "Amora",
    registrationNumber: new Date().getTime(),
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }