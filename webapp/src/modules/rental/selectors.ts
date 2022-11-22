import { RentalListing } from '@dcl/schemas'
import { isLoadingType } from '@chaincodedev/decentraland-dapps/dist/modules/loading/selectors'
import { RootState } from '../reducer'
import {
  ACCEPT_RENTAL_LISTING_REQUEST,
  CLAIM_LAND_REQUEST,
  REMOVE_RENTAL_REQUEST
} from './actions'

export const getState = (state: RootState) => state.rental
export const getData = (state: RootState) => getState(state).data
export const getLoading = (state: RootState) => getState(state).loading
export const getError = (state: RootState) => getState(state).error
export const getRentalById = (
  state: RootState,
  id: string
): RentalListing | null => getData(state)[id] ?? null
export const isClaimingLand = (state: RootState) =>
  isLoadingType(getLoading(state), CLAIM_LAND_REQUEST)
export const isRemovingRental = (state: RootState) =>
  isLoadingType(getLoading(state), REMOVE_RENTAL_REQUEST)
export const isAcceptingRental = (state: RootState) =>
  isLoadingType(getLoading(state), ACCEPT_RENTAL_LISTING_REQUEST)
export const isSubmittingTransaction = (state: RootState) =>
  getState(state).isSubmittingTransaction
