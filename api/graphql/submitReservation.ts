// api/graphql/submitReservation.ts
import { gql } from "@apollo/client"

export const SUBMIT_RESERVATION_FORM = gql`
  mutation SubmitReservationForm($formId: Int!, $data: [FormSubmissionFieldInput]!) {
    submitForm(input: { formId: $formId, data: $data }) {
      success
      message
      errors {
        fieldId
        message
      }
    }
  }
`
