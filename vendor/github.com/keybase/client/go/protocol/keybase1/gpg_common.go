// Auto-generated by avdl-compiler v1.3.11 (https://github.com/keybase/node-avdl-compiler)
//   Input file: avdl/keybase1/gpg_common.avdl

package keybase1

import (
	"github.com/keybase/go-framed-msgpack-rpc/rpc"
)

type GPGKey struct {
	Algorithm  string        `codec:"algorithm" json:"algorithm"`
	KeyID      string        `codec:"keyID" json:"keyID"`
	Creation   string        `codec:"creation" json:"creation"`
	Expiration string        `codec:"expiration" json:"expiration"`
	Identities []PGPIdentity `codec:"identities" json:"identities"`
}

type GpgCommonInterface interface {
}

func GpgCommonProtocol(i GpgCommonInterface) rpc.Protocol {
	return rpc.Protocol{
		Name:    "keybase.1.gpgCommon",
		Methods: map[string]rpc.ServeHandlerDescription{},
	}
}

type GpgCommonClient struct {
	Cli rpc.GenericClient
}
