import React, { useState, useEffect, useMemo, useRef } from "react";
import QrCodeWithLogo from "qr-code-with-logo";
import logo from "../logo.png";
console.log(logo);
const color = {
  green: "#52b35f",
  yellow: "#fcc109",
  red: "#f80701"
};
function QrCodeApp() {
  // state
  const [codeColor, setCodeColor] = useState("green");
  // ref
  const refCb = useRef();
  // function
  const renderQR = ref => {
    const myCanvas = document.createElement("canvas");
    // document.getElementsByTagName('body')[0].appendChild(myCanvas);
    ref.appendChild(myCanvas);

    QrCodeWithLogo.toCanvas({
      canvas: myCanvas,
      content: "http://www.baidu.com",
      width: "200",
      logo: {
        // src: LocalImage,
        // src: logo,
        src: 'https://cdn.myweimai.com/images/f1478e2f69ab2737da5464bb3b91e77a_72x72.png',
        radius: 8,
        bgColor: "#Ffffff"
      },
      nodeQrCodeOptions: {
        margin: 2,
        padding: 0,
        color: {
          dark: color[codeColor], // 黄色
          light: "#ffffff"
        }
      }
    });
  };
  // effect
  useEffect(() => {
    console.log(refCb);
    if (refCb.current) {
      console.log(refCb.current);
      renderQR(refCb.current);
    }
    return () => {
      console.log(codeColor);
    };
  }, [codeColor]);

  return useMemo(() => {
    return (
      <div className="content">
        <div
          className={`health-code`}
          style={{ borderColor: color[codeColor] }}
          ref={refCb}
        />
      </div>
    );
  }, [codeColor]);
}

export default QrCodeApp;
