// <mjml>
//   <mj-head>
//     <mj-preview>MJML Preview</mj-preview>
//     <mj-title>MJML Title</mj-title>
//     <mj-attributes>
//       <mj-class name="nn1-text" font-size="16px" line-height="28px" color="#f8f7ff" font-family="-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol" padding="0 0 28px 0" />
//       <mj-class name="nn1-divider" padding="0 0 28px 0" border-width="1px" border-color="#29282e" />
//     </mj-attributes>
//   </mj-head>
//   <mj-body background-color="#09080d">
//     <mj-section padding="56px 14px">
//       <mj-column>
//         <mj-image width="119px" src="https://nn1.dev/logo-email.png" align="left" padding="0 0 56px 0"></mj-image>
//         <mj-text mj-class="nn1-text">We just received a new feedback.</mj-text>
//         <mj-divider mj-class="nn1-divider" />
//         <mj-text mj-class="nn1-text">Name: Name and surname</mj-text>
//         <mj-text mj-class="nn1-text">Stack: Stack</mj-text>
//         <mj-text mj-class="nn1-text">Who: Pro</mj-text>
//         <mj-text mj-class="nn1-text">Interval: Interval</mj-text>
//         <mj-text mj-class="nn1-text">Feedback: Feedback</mj-text>
//         <mj-divider mj-class="nn1-divider" />
//         <mj-text mj-class="nn1-text">Have a good day 👋</mj-text>
//       </mj-column>
//     </mj-section>
//   </mj-body>
// </mjml>

const generateEmailFeedback = ({
  name,
  stack,
  who,
  interval,
  feedback,
}: {
  name: string;
  stack: string;
  who: string;
  interval: string;
  feedback: string;
}) => `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title> MJML Title </title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }
  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
</head>

<body style="word-spacing:normal;background-color:#09080d;">
  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> MJML Preview </div>
  <div style="background-color:#09080d;">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:56px 14px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:572px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 56px 0;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:119px;">
                                <img height="auto" src="https://nn1.dev/logo-email.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="119" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 28px 0;word-break:break-word;">
                        <div style="font-family:-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;font-size:16px;line-height:28px;text-align:left;color:#f8f7ff;">We just received a new feedback.</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="font-size:0px;padding:0 0 28px 0;word-break:break-word;">
                        <p style="border-top:solid 1px #29282e;font-size:1px;margin:0px auto;width:100%;">
                        </p>
                        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #29282e;font-size:1px;margin:0px auto;width:572px;" role="presentation" width="572px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 28px 0;word-break:break-word;">
                        <div style="font-family:-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;font-size:16px;line-height:28px;text-align:left;color:#f8f7ff;">Name: ${name}</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 28px 0;word-break:break-word;">
                        <div style="font-family:-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;font-size:16px;line-height:28px;text-align:left;color:#f8f7ff;">Stack: ${stack}</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 28px 0;word-break:break-word;">
                        <div style="font-family:-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;font-size:16px;line-height:28px;text-align:left;color:#f8f7ff;">Who: ${who}</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 28px 0;word-break:break-word;">
                        <div style="font-family:-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;font-size:16px;line-height:28px;text-align:left;color:#f8f7ff;">Interval: ${interval}</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 28px 0;word-break:break-word;">
                        <div style="font-family:-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;font-size:16px;line-height:28px;text-align:left;color:#f8f7ff;">Feedback: ${feedback}</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="font-size:0px;padding:0 0 28px 0;word-break:break-word;">
                        <p style="border-top:solid 1px #29282e;font-size:1px;margin:0px auto;width:100%;">
                        </p>
                        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #29282e;font-size:1px;margin:0px auto;width:572px;" role="presentation" width="572px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 0 28px 0;word-break:break-word;">
                        <div style="font-family:-apple-system,BlinkMacSystemFont,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;font-size:16px;line-height:28px;text-align:left;color:#f8f7ff;">Have a good day 👋</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>`;

export default generateEmailFeedback;
