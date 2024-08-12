type UserControlProps =
  | 'noPermission'
  | 'noKYC'
  | 'noWallet'
  | 'noTransactionPin'
  | 'withdraw'
  | null;

type IKycDocStatus =
  | 'failed'
  | 'submitted'
  | 'approved'
  | 'reviewed'
  | 'pending';

type IKycDocs = {
  submittedSelfie: IKycDocStatus;
  submittedDoc: IKycDocStatus;
};

type AppState = {
  userId: string;
  logoutToast: boolean;
  wallets: WalletProps[];
  user: UserProps | null;
  deviceId: string | null;
  group: GroupProps | null;
  userEmail: string | null;
  kycDocs: IKycDocs | null;
  isAuthenticated: boolean;
  token: null | RefreshTokenModel;
  userController: UserControlProps;
  currentWallet: WalletProps | null;
};

type ProductState = {
  plan: ProductKey;
  products: Products[];
  subscribed: boolean;
  canceled: boolean;
  amount: number | null;
  startDate: number | null;
  endDate: number | null;
  nextBillingDate: number | null;
  nextPlan: ProductKey | null;
};

type UIState = {
  hasCAP: boolean;
  isNewUser: boolean;
  biometric: boolean;
  kycStatus: KYCProps;
  hasProducts: boolean;
  shopOnboarded: boolean;
  cardOnboarded: boolean;
  storeOnboarded: boolean;
  enableScreenShot: boolean;
  isUserOnboarded: boolean;
  budgetOnboarded: boolean;
  transferOnboarded: boolean;
  isFingerPrintEnable: boolean;
  cameraPermission: CameraPermissionStatus;
};

type OnboardedState = {
  onboard: boolean;
};

type CTAtState = {
  type?: 'success' | 'error' | 'info' | 'warning';
  message: string;
  visible: boolean;
  title?: string;
};
type ToastState = {
  message?: string;
  status: 'success' | 'error' | 'warning' | 'info';
  duration?: 'short' | 'medium' | 'long';
  visible?: boolean;
  title: string;
};
