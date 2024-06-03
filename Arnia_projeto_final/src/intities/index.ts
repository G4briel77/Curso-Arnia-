export interface IGuest {
    name: string;
    email: string;
    password: string;
  }

//DTO: DATA TRANSFER OBJECT 

export interface IAdmin {
    name: string;
    email: string;
    password: string;
  }
  export interface IAuthResponse {
    token: string;
    userType: 'guest' | 'admin'; // Diferenciação do tipo de usuário
  }
  export interface ILoginRequest {
    email: string;
    password: string;
  }
  export interface IUpdateRoomStatus {
    roomId: string;
    status: 'check-in' | 'check-out' | 'maintenance';
  }

  export interface IReservation {
    roomId: string;
    guestId: string;
    startDate: Date;
    endDate: Date;
  }
  export interface ICancelReservation {
    reservationId: string;
  }