import { RentalListing } from '@dcl/schemas'
import { Transaction } from 'decentraland-dapps/dist/modules/transaction/types'
import { NFT } from '../../../modules/nft/types'
import { VendorName } from '../../../modules/vendor'

export type Props = {
  className?: string
  nft: NFT
  rental: RentalListing | null
  onClaimLand: () => void
  onCreateOrEditRent: (
    nft: NFT<VendorName>,
    rental: RentalListing | null
  ) => void
  isClaimingBackLandTransactionPending: boolean
  claimingBackLandTransaction: Transaction | null
}

export type OwnProps = Pick<Props, 'nft' | 'rental'>

export type MapStateProps = Pick<Props, 'isClaimingBackLandTransactionPending' | 'claimingBackLandTransaction'>

export type MapDispatchProps = Pick<Props, 'onClaimLand' | 'onCreateOrEditRent'>
