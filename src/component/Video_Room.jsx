import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Video_Room = () => {
    const {id}=useParams();

const meeting=(element)=>{
         const appID = 1904204564;
            const serverSecret = "809c98f6106820e9c05883ba3c7a3392";
            const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Date.now().toString(),  "suman");

            // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container:element ,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      })
}


  return (
  <>
  <div ref={meeting} />
  </>
  )
}

export default Video_Room
