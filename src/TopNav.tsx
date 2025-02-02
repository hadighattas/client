import NavBar from "@pluralsight/ps-design-system-navbar";
import NavBrand from "@pluralsight/ps-design-system-navbrand";
import React from "react";
import { RedirectUrlInput } from "./RedirectUrl/RedirectUrl.component";
import { WebhookStoreUrlInput } from "./WebhookStoreUrl/WebhookStoreUrl.component";

function SkillsLogo() {
  return (
    <svg
      width="320.96"
      height="277.96"
      data-name="Group 89679"
      version="1.1"
      viewBox="0 0 320.96 277.96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m187.77 57.837a27.288 27.288 0 1 1-27.289-27.289 27.289 27.289 0 0 1 27.289 27.289"
        fill="#23f0c7"
        data-name="Path 28142"
      />
      <path
        d="m79.005 198.95 32.142-55.669v-134.79h98.669v75.6"
        fill="none"
        stroke="#23f0c7"
        strokeMiterlimit="10"
        strokeWidth="14"
        data-name="Path 28143"
      />
      <path
        d="m65.363 175.32a27.289 27.289 0 1 1-9.988 37.277 27.288 27.288 0 0 1 9.988-37.277"
        fill="#23f0c7"
        data-name="Path 28144"
      />
      <path
        d="m241.96 198.96h-64.282l-116.72 67.391-49.334-85.446 65.474-37.8"
        fill="none"
        stroke="#23f0c7"
        strokeMiterlimit="10"
        strokeWidth="14"
        data-name="Path 28145"
      />
      <path
        d="m228.31 222.59a27.289 27.289 0 1 1 37.277-9.988 27.288 27.288 0 0 1-37.277 9.988"
        fill="#23f0c7"
        data-name="Path 28146"
      />
      <path
        d="m160.48 57.837 32.141 55.67 116.72 67.393-49.334 85.448-65.475-37.8"
        fill="none"
        stroke="#23f0c7"
        strokeMiterlimit="10"
        strokeWidth="14"
        data-name="Path 28147"
      />
    </svg>
  );
}

function SkillsBranding(props: any) {
  return <NavBrand {...props} logo={<SkillsLogo />} wordmark="Open Webhook" />;
}

export default function TopNav() {
  return (
    <div>
      <NavBar
        brand={<SkillsBranding />}
        items={[
          <WebhookStoreUrlInput key={"WebhookStoreUrlInput"} />,
          <RedirectUrlInput key={"RedirectUrlInput"} />,
        ]}
      />
    </div>
  );
}
