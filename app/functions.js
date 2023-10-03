export const useTemplate = (id,data) => {
    
    const firstName = data.get('First Name')
    const lastName = data.get('Last Name')
    const jobTitle = data.get('Job Title')
    const department = data.get('Department')
    const companyName = data.get('Company Name')
    const officePhone = data.get('Office Phone')
    const mobilePhone = data.get('Mobile Phone')
    const website = data.get('Website')
    const email = data.get('Email')
    const addressLine1 = data.get('Address Line 1')
    const addressLine2 = data.get('Address Line 2')
    const addressLine3 = data.get('Address Line 3')
    const addressLine4 = data.get('Address Line 4')
    const facebookUrl = data.get('Facebook')
    const twitterUrl = data.get('X')
    const linkedinUrl = data.get('LinkedIn')
    const instagramUrl = data.get('Instagram')
    const profileImg = data.get('Profile Picture')
    const companyLogo = data.get('Company Logo')
    const font = data.get('Font')
    const sizing = data.get('Sizing')
    const linkColor = `#${data.get('Link Color')}`
    const textColor = `#${data.get('Text Color')}`
    const themeColor = `#${data.get('Theme Color')}`
    const ctaColor = `#${data.get('CTA Color')}`
    const ctaTextColor = `#${data.get('CTA Text Color')}`
    const ctaText = data.get('Custom CTA Copy')
    const ctaUrl = data.get('Custom CTA URL')

    let fontSm;
    let fontMd;
    let fontLg;
    let lineHeight;
    let socialHeight;
    let rowSpacing;
    let imgWidth;

    if(sizing === "1"){
        fontSm = '11px'
        fontMd = '12px'
        fontLg = '16px'
        lineHeight = '20px'
        rowSpacing = 20
        socialHeight = 20
        imgWidth = 110
    }

    if(sizing === "2"){
        fontSm = '12px'
        fontMd = '14px'
        fontLg = '18px'
        lineHeight = '22px'
        rowSpacing = 24
        socialHeight = 24
        imgWidth = 115
    }

    if(sizing === "3"){
        fontSm = '14px'
        fontMd = '16px'
        fontLg = '20px'
        lineHeight = "24px"
        rowSpacing = 28
        socialHeight = 28
        imgWidth = 120
    }

    let hasStarted;

    if(
        firstName ||
        lastName ||
        jobTitle ||
        department ||
        companyName ||
        officePhone ||
        mobilePhone ||
        website ||
        email ||
        addressLine1 ||
        addressLine2 ||
        addressLine3 ||
        addressLine4 ||
        facebookUrl ||
        linkedinUrl ||
        twitterUrl ||
        instagramUrl ||
        profileImg ||
        companyLogo ||
        ctaText ||
        ctaUrl
    ) {
        hasStarted = true;
    }
    else {
        hasStarted = false
    }

    const imagePlaceholderUrl = 'https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1-1024x683.png'

    const facebookImgUrl = "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
    const twitterImgUrl = "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
    const linkedinImgUrl = "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
    const instagramImgUrl = "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"

    const phoneImgUrl = "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
    const emailImgUrl = "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
    const websiteImgUrl = "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
    const locationImgUrl = "https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"

    const templates = [
        {
            htmlString: `
            <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
               <tbody>
                  <tr>
                     <td>
                        <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                           <tbody>
                              <tr>
                                 <td style="vertical-align: top;">
                                    <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                       <tbody>
                                       ${hasStarted && profileImg ?
                                            `
                                            <tr>
                                                <td style="text-align: center;">
                                                    <img src="${profileImg}" role="presentation" width="${imgWidth}" style="display: block; max-width: ${imgWidth};">
                                                </td>
                                            </tr>
                                          `
                                        : !hasStarted ?
                                            `
                                                <tr>
                                                    <td style="text-align: center;">
                                                        <img src="${imagePlaceholderUrl}" role="presentation" width="${imgWidth}" style="display: block; max-width: ${imgWidth};">
                                                    </td>
                                                </tr>
                                            `
                                        :
                                            ``
                                        }
                                        ${hasStarted && profileImg && companyLogo ?
                                            `
                                                <tr>
                                                    <td height="${rowSpacing}"></td>
                                                </tr>                         
                                            `
                                        : !hasStarted ?
                                            `
                                                <tr>
                                                    <td height="${rowSpacing}"></td>
                                                </tr>
                                            `
                                        :
                                            ``
                                        }
                                        ${hasStarted && companyLogo ?
                                            `
                                                <tr>
                                                    <td style="text-align: center;">
                                                        <img src="${companyLogo}" role="presentation" width="${imgWidth}" style="display: block; max-width: ${imgWidth};">
                                                    </td>
                                                </tr>
                                            `
                                        : !hasStarted ?
                                            `
                                                <tr>
                                                    <td style="text-align: center;">
                                                        <img src="${imagePlaceholderUrl}" role="presentation" width="${imgWidth}" style="display: block; max-width: ${imgWidth};">
                                                    </td>
                                                </tr>
                                            `
                                        :
                                            ``
                                        }

                                        ${hasStarted && profileImg || hasStarted && companyLogo ?
                                            `
                                                <tr>
                                                    <td height="${rowSpacing}"></td>
                                                </tr>                         
                                            `
                                        : !hasStarted ?
                                            `
                                                <tr>
                                                    <td height="${rowSpacing}"></td>
                                                </tr>
                                            `
                                        :
                                            ``
                                        }
                                          <tr>
                                             <td style="text-align: center;">
                                                <table cellpadding="0" cellspacing="0" style="display: inline-block; vertical-align: -webkit-baseline-middle; font-size: large; font-family: ${font};">
                                                   <tbody>
                                                      <tr style="text-align: center;">
                                                      ${hasStarted && facebookUrl ?
                                                            `
                                                                <td>
                                                                    <a href="${facebookUrl}" color="${linkColor}" style="display: inline-block; padding: 0px; background-color: ${linkColor};">
                                                                        <img src="${facebookImgUrl}" alt="Facebook" color="${linkColor}" height="${socialHeight}" style="background-color: ${linkColor}; max-width: ${socialHeight}; display: block;">
                                                                    </a>
                                                                </td>
                                                                <td width="5">
                                                                    <div></div>
                                                                </td>
                                                            `
                                                         : !hasStarted ?
                                                            `
                                                                <td>
                                                                    <a color="${linkColor}" style="display: inline-block; padding: 0px; background-color: ${linkColor};">
                                                                        <img src="${facebookImgUrl}" alt="Facebook" color="${linkColor}" height="${socialHeight}" style="background-color: ${linkColor}; max-width: ${socialHeight}; display: block;">
                                                                    </a>
                                                                </td>
                                                                <td width="5">
                                                                    <div></div>
                                                                </td>
                                                            `
                                                         :
                                                            ``
                                                         }
                                                         ${hasStarted && twitterUrl ?
                                                            `
                                                                <td>
                                                                    <a href="${twitterUrl}" color="${linkColor}" style="display: inline-block; padding: 0px; background-color: ${linkColor};">
                                                                        <img src="${twitterImgUrl}" alt="Twitter" color="${linkColor}" height="${socialHeight}" style="background-color: ${linkColor}; max-width: ${socialHeight}; display: block;">
                                                                    </a>
                                                                </td>
                                                                <td width="5">
                                                                    <div></div>
                                                                </td>
                                                            `
                                                        : !hasStarted ?
                                                            `
                                                                <td>
                                                                    <a color="${linkColor}" style="display: inline-block; padding: 0px; background-color: ${linkColor};">
                                                                        <img src="${twitterImgUrl}" alt="Twitter" color="${linkColor}" height="${socialHeight}" style="background-color: ${linkColor}; max-width: ${socialHeight}; display: block;">
                                                                    </a>
                                                                </td>
                                                                <td width="5">
                                                                    <div></div>
                                                                </td>
                                                            `
                                                        :
                                                         ``
                                                        }
                                                        ${hasStarted && linkedinUrl ?
                                                            `
                                                                <td>
                                                                    <a href="${linkedinUrl}" color="${linkColor}" style="display: inline-block; padding: 0px; background-color: ${linkColor};">
                                                                        <img src="${linkedinImgUrl}" alt="LinkedIn" color="${linkColor}" height="${socialHeight}" style="background-color: ${linkColor}; max-width: ${socialHeight}; display: block;">
                                                                    </a>
                                                                </td>
                                                                <td width="5">
                                                                    <div></div>
                                                                </td>
                                                            `
                                                        : !hasStarted ?
                                                            `
                                                                <td>
                                                                    <a color="${linkColor}" style="display: inline-block; padding: 0px; background-color: ${linkColor};">
                                                                        <img src="${linkedinImgUrl}" alt="LinkedIn" color="${linkColor}" height="${socialHeight}" style="background-color: ${linkColor}; max-width: ${socialHeight}; display: block;">
                                                                    </a>
                                                                </td>
                                                                <td width="5">
                                                                    <div></div>
                                                                </td>
                                                            `
                                                        :
                                                            ``
                                                        }
                                                         
                                                        ${hasStarted && instagramUrl ?
                                                            `
                                                                <td>
                                                                    <a href="${instagramUrl}" color="${linkColor}" style="display: inline-block; padding: 0px; background-color: ${linkColor};">
                                                                        <img src="${instagramImgUrl}" alt="Instagram" color="${linkColor}" height="${socialHeight}" style="background-color: ${linkColor}; max-width: ${socialHeight}; display: block;">
                                                                    </a>
                                                                </td>
                                                                <td width="5">
                                                                    <div></div>
                                                                </td>
                                                            `
                                                        :  !hasStarted ?
                                                            `
                                                                <td>
                                                                    <a color="${linkColor}" style="display: inline-block; padding: 0px; background-color: ${linkColor};">
                                                                        <img src="${instagramImgUrl}" alt="Instagram" color="${linkColor}" height="${socialHeight}" style="background-color: ${linkColor}; max-width: ${socialHeight}; display: block;">
                                                                    </a>
                                                                </td>
                                                                <td width="5">
                                                                    <div></div>
                                                                </td>
                                                            `
                                                        :
                                                            ``
                                                        }
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                                 <td width="46">
                                    <div></div>
                                 </td>
                                 <td style="padding: 0px; vertical-align: middle;">
                                    ${hasStarted && firstName || hasStarted && lastName ?
                                        `
                                            <h2 color="${textColor}" style="margin-bottom: 5px; font-size: ${fontLg}; color: ${textColor}; font-weight: 600;">
                                                <span>${firstName ? firstName : ``} ${lastName ? lastName : ``}</span>
                                            </h2>
                                        `
                                    : !hasStarted ?
                                        `
                                            <h2 color="${textColor}" style="margin-bottom: 5px; font-size: ${fontLg}; color: ${textColor}; font-weight: 600;">
                                                <span>John Smith</span>
                                            </h2>
                                        `
                                    :
                                        ``
                                    }
                                    ${hasStarted && jobTitle ?
                                        `
                                            <p color="${textColor}" font-size="medium" style="margin: 0px; color: ${textColor}; font-size: ${fontMd}; line-height: ${lineHeight};">
                                                <span>${jobTitle}</span>
                                            </p>
                                        `
                                    : !hasStarted ?
                                        `
                                            <p color="${textColor}" font-size="medium" style="margin: 0px; color: ${textColor}; font-size: ${fontMd}; line-height: ${lineHeight};">
                                                <span>Real Estate Agent</span>
                                            </p>
                                        `
                                    :
                                        ``
                                    }
                                    ${hasStarted && department ?
                                        `
                                            <p color="${textColor}" font-size="medium" style="margin: 0px; font-weight: 500; color: ${textColor}; font-size: ${fontMd}; line-height: ${lineHeight};">
                                                <span>${department}</span>
                                            </p>
                                        `
                                    : !hasStarted ?
                                        `
                                            <p color="${textColor}" font-size="medium" style="margin: 0px; font-weight: 500; color: ${textColor}; font-size: ${fontMd}; line-height: ${lineHeight};">
                                                <span>Los Angeles</span>
                                            </p>
                                        `
                                    :
                                        ``
                                    }
                                    ${hasStarted && companyName ?
                                        `
                                            <p color="${textColor}" font-size="medium" style="color: ${textColor}; margin: 0px; font-size: ${fontMd}; line-height: ${lineHeight};">
                                                <span>${companyName}</span>
                                            </p>
                                        `
                                    : !hasStarted ?
                                        `
                                            <p color="${textColor}" font-size="medium" style="color: ${textColor}; margin: 0px; font-size: ${fontMd}; line-height: ${lineHeight};">
                                                <span>Your Agency</span>
                                            </p>
                                        `
                                    :
                                        ``
                                    }
                                    <table cellpadding="0" cellspacing="0" style="width: 100%; vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                       <tbody>
                                          <tr>
                                             <td height="${rowSpacing}"></td>
                                          </tr>
                                          <tr>
                                             <td color="${themeColor}" direction="horizontal" width="auto" height="1" style="width: 100%; border-bottom: 1px solid ${themeColor}; border-left: none; display: block;">
                                             </td>
                                          </tr>
                                          <tr>
                                             <td height="${rowSpacing}"></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                       <tbody>
                                       ${hasStarted && officePhone || hasStarted && mobilePhone ?
                                            `
                                            <tr height="25" style="vertical-align: middle;">
                                            <td width="30" style="vertical-align: middle;">
                                               <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                                  <tbody>
                                                     <tr>
                                                        <td style="vertical-align: bottom;">
                                                           <span color="${themeColor}" width="11" style="display: inline-block; background-color: ${themeColor};">
                                                               <img src="${phoneImgUrl}" color="${themeColor}" alt="address" width="13" style="display: block; background-color: ${themeColor};">
                                                           </span>
                                                       </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                            <td style="padding: 0px; color: ${textColor};">
                                                ${officePhone && `
                                                <a href="tel:${officePhone}" color="${textColor}" style="text-decoration: none; color: ${textColor}; font-size: ${fontSm};">
                                                    <span>${officePhone}</span>
                                                </a> 
                                               `}
                                               ${officePhone && mobilePhone && '|'}
                                               ${mobilePhone && `
                                                <a href="tel:${mobilePhone}" color="${textColor}" style="text-decoration: none; color: ${textColor}; font-size: ${fontSm};">
                                                    <span>${mobilePhone}</span>
                                                </a>
                                               `}
                                           </td>
                                         </tr>
                                            `
                                        : !hasStarted ?
                                            `
                                            <tr height="25" style="vertical-align: middle;">
                                            <td width="30" style="vertical-align: middle;">
                                               <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                                  <tbody>
                                                     <tr>
                                                        <td style="vertical-align: bottom;">
                                                           <span color="${themeColor}" width="11" style="display: inline-block; background-color: ${themeColor};">
                                                               <img src="${phoneImgUrl}" color="${themeColor}" alt="address" width="13" style="display: block; background-color: ${themeColor};">
                                                           </span>
                                                       </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                            <td style="padding: 0px; color: ${textColor};">
                                               <a href="tel:" color="${textColor}" style="text-decoration: none; color: ${textColor}; font-size: ${fontSm};">
                                                   <span>111 222 3333</span>
                                               </a> 
                                               | 
                                               <a href="tel:" color="${textColor}" style="text-decoration: none; color: ${textColor}; font-size: ${fontSm};">
                                                   <span>111 222 3333</span>
                                               </a>
                                           </td>
                                         </tr>
                                            `
                                        :
                                            ``
                                        }

                                        ${hasStarted && email ?
                                            `
                                            <tr height="25" style="vertical-align: middle;">
                                            <td width="30" style="vertical-align: middle;">
                                               <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                                  <tbody>
                                                     <tr>
                                                        <td style="vertical-align: bottom;">
                                                        <span color="${themeColor}" width="11" style="display: inline-block; background-color: ${themeColor};">
                                                        <img src="${emailImgUrl}" color="${themeColor}" alt="address" width="13" style="display: block; background-color: ${themeColor};">
                                                    </span>
                                                       </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                            <td style="padding: 0px;">
                                               <a href="mailto:${email}" color="${textColor}" style="text-decoration: none; color: ${textColor}; font-size: ${fontSm};">
                                                   <span>${email}</span>
                                               </a>
                                           </td>
                                         </tr>
                                            `
                                        : !hasStarted ?
                                            `
                                            <tr height="25" style="vertical-align: middle;">
                                            <td width="30" style="vertical-align: middle;">
                                               <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                                  <tbody>
                                                     <tr>
                                                        <td style="vertical-align: bottom;">
                                                        <span color="${themeColor}" width="11" style="display: inline-block; background-color: ${themeColor};">
                                                        <img src="${emailImgUrl}" color="${themeColor}" alt="address" width="13" style="display: block; background-color: ${themeColor};">
                                                    </span>
                                                       </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                            <td style="padding: 0px;">
                                               <a href="mailto:" color="${textColor}" style="text-decoration: none; color: ${textColor}; font-size: ${fontSm};">
                                                   <span>john@youragency.com</span>
                                               </a>
                                           </td>
                                         </tr>
                                            `
                                        :
                                            ``
                                        }

                                        ${hasStarted && website ?
                                            `
                                            <tr height="25" style="vertical-align: middle;">
                                            <td width="30" style="vertical-align: middle;">
                                               <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                                  <tbody>
                                                     <tr>
                                                        <td style="vertical-align: bottom;">
                                                        <span color="${themeColor}" width="11" style="display: inline-block; background-color: ${themeColor};">
                                                        <img src="${websiteImgUrl}" color="${themeColor}" alt="address" width="13" style="display: block; background-color: ${themeColor};">
                                                    </span>
                                                       </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                            <td style="padding: 0px;">
                                               <a href="//" color="${textColor}" style="text-decoration: none; color: ${textColor}; font-size: ${fontSm};">
                                                   <span>${website}</span>
                                               </a>
                                           </td>
                                         </tr>
                                            `
                                        : !hasStarted ?
                                            `
                                            <tr height="25" style="vertical-align: middle;">
                                            <td width="30" style="vertical-align: middle;">
                                               <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                                  <tbody>
                                                     <tr>
                                                        <td style="vertical-align: bottom;">
                                                        <span color="${themeColor}" width="11" style="display: inline-block; background-color: ${themeColor};">
                                                        <img src="${websiteImgUrl}" color="${themeColor}" alt="address" width="13" style="display: block; background-color: ${themeColor};">
                                                    </span>
                                                       </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                            <td style="padding: 0px;">
                                               <a href="//" color="${textColor}" style="text-decoration: none; color: ${textColor}; font-size: ${fontSm};">
                                                   <span>www.youragency.com</span>
                                               </a>
                                           </td>
                                         </tr>
                                            `
                                        :
                                            ``
                                        }

                                        ${hasStarted && addressLine1 || hasStarted && addressLine2 || hasStarted && addressLine3 || hasStarted && addressLine4 ?
                                            `
                                            <tr height="25" style="vertical-align: middle;">
                                            <td width="30" style="vertical-align: middle;">
                                               <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                                  <tbody>
                                                     <tr>
                                                        <td style="vertical-align: bottom;">
                                                           <span color="${themeColor}" width="11" style="display: inline-block; background-color: ${themeColor};">
                                                               <img src="${locationImgUrl}" color="${themeColor}" alt="address" width="13" style="display: block; background-color: ${themeColor};">
                                                           </span>
                                                       </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                            <td style="padding: 0px;"><span color="${textColor}" style="font-size: ${fontSm}; color: ${textColor};"><span>${addressLine1 && addressLine1} ${addressLine2 && addressLine2} ${addressLine3 && addressLine3} ${addressLine4 && addressLine4}</span></span></td>
                                         </tr>
                                            `
                                        : !hasStarted ?
                                            `
                                            <tr height="25" style="vertical-align: middle;">
                                            <td width="30" style="vertical-align: middle;">
                                               <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                                  <tbody>
                                                     <tr>
                                                        <td style="vertical-align: bottom;">
                                                           <span color="${themeColor}" width="11" style="display: inline-block; background-color: ${themeColor};">
                                                               <img src="${locationImgUrl}" color="${themeColor}" alt="address" width="13" style="display: block; background-color: ${themeColor};">
                                                           </span>
                                                       </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                            <td style="padding: 0px;"><span color="${textColor}" style="font-size: ${fontSm}; color: ${textColor};"><span>123 St, Los Angeles, California, 90210</span></span></td>
                                         </tr>
                                            `
                                        :
                                            ``
                                        }
                                       </tbody>
                                    </table>
                                    ${hasStarted && ctaText || hasStarted && ctaUrl ?
                                        `
                                            <table cellpadding="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: ${font};">
                                                <tbody>
                                                <tr>
                                                    <td height="${rowSpacing}"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <span style="display: block; text-align: left;">
                                                <a target="_blank" rel="noopener noreferrer" href="${ctaUrl}" color="${ctaTextColor}" style="border-width: 6px 12px; border-style: solid; border-color:${ctaColor}; display: inline-block; background-color: ${ctaColor}; color: ${ctaTextColor}; font-weight: 500; text-decoration: none; text-align: center; line-height: ${lineHeight}; font-size: ${fontMd}; border-radius: 3px;">
                                                    ${ctaText}
                                                </a>
                                            </span>
                                        `
                                    :
                                        ``
                                    }
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
            `
        },
        {
            htmlString: `<div>${firstName}</div>`
        },
        {
            htmlString: `<div>${firstName}</div>`
        },
        {
            htmlString: `<div>${firstName}</div>`
        },
        {
            htmlString: `<div>${firstName}</div>`
        },
    ]

    return templates[id-1].htmlString
}