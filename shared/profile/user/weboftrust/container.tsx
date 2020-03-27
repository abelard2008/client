import * as Container from '../../../util/container'
import {WebOfTrustVerificationType} from '../../../constants/types/more'
import {WotStatusType, WotReactionType} from '../../../constants/types/rpc-gen'
import WebOfTrust from '.'

type OwnProps = {
  webOfTrustAttestation: {
    attestation: string
    attestingUser: string
    vouchedAt: string
    status: WotStatusType
    verificationType: WebOfTrustVerificationType
  }
}

const Connected = Container.connect(
  (state, ownProps: OwnProps) => {
    const {attestation, attestingUser, vouchedAt, status, verificationType} = ownProps.webOfTrustAttestation
    return {
      attestation,
      attestingUser,
      vouchedAt,
      status,
      username: state.config.username,
      verificationType,
    }
  },
  () => ({
    _onAccept: () => {},
    _onHide: () => {},
    _onReject: () => {},
  }),
  (stateProps, dispatchProps) => ({
    attestation: stateProps.attestation,
    attestingUser: stateProps.attestingUser,
    vouchedAt: stateProps.vouchedAt,
    status: stateProps.status,
    // Send these callback down based on what type of attestation it is.
    onAccept: dispatchProps._onAccept,
    onHide: dispatchProps._onHide,
    onReject: dispatchProps._onReject,
    verificationType: stateProps.verificationType,
  })
)(WebOfTrust)

export default Connected
