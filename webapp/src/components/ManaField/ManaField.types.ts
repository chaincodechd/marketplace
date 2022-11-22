import { Network } from '@dcl/schemas'
import { FieldProps } from '@chaincodedev/decentraland-ui'

export type Props = FieldProps & {
  network: Network
}
