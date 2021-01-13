
export interface IRegistration {
  id: string
  fullName?: string | null
  phoneNumber?: string | null
  email?: string | null
  salary?: string | null
  __typename: string
}

export type AllQueryParamsType = [registrationId: string, step: RouteStepType]

export type RegisterViewProps = {
  allQueryParams: AllQueryParamsType | []
}

export enum RouteStepType {
  'full-name' = 'full-name',
  'email' = 'email',
  'phone-number' = 'phone-number',
  'salary' = 'salary',
  'summary' = 'summary',
}

export type FormStepsProps = {
  currentStepIndex: number
  registrationId: string,
  registrationData: Record<string, string | null>
}
export type StepProps = {
  currentPage: number
  registrationId: string
  registrationData: Record<string, string | null>
}