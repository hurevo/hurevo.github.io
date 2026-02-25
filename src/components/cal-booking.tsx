import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"dark":{"cal-brand":"#15BA81"},"light":{"cal-brand":"#15BA81"}},"hideEventTypeDetails":false,"layout":"week_view"});
    })();
  }, [])
  return <Cal namespace="30min"
    calLink="hurevo/30min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"week_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}}
  />;
};
