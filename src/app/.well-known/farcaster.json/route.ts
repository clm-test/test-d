export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = 

{
  "accountAssociation": {
    header: "eyJmaWQiOjI2ODQzOCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDIxODA4RUUzMjBlREY2NGMwMTlBNmJiMEY3RTRiRkIzZDYyRjA2RWMifQ",
    payload: "eyJkb21haW4iOiJkZWdlbi12Mi52ZXJjZWwuYXBwIn0",
    signature: "MHhjMzkxYTc4MTRlMWQwNDI5MzVmNGQzYjJlYWVmNWE5YTQwNDVhN2E1YjZiNDlkZjAxMDhjZDFmN2YzYzYwMDg5NDljMDdjYzFhOGYwYjk0MWUzNzBjZDRlMjFkOTU1MGFjMjg4YjdmNDk0MzJjZGNmY2U0MDJkNzc2MmM3ZTI2ZDFj"
  },
  frame: {
    version: "1",
    name: "DEGEN",
    iconUrl: `${appUrl}/icon.png`,
    homeUrl: appUrl,
    imageUrl: "https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/degen.png",
    buttonTitle: "SEE",
    splashImageUrl: `https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/pfp.png`,
    splashBackgroundColor: "#333333",
    webhookUrl: "https://webhooks.pingem.xyz/f/041ir",
    castShareUrl: "https://degen-v2.vercel.app",
    primaryCategory: "utility"
    },
  {
  "baseBuilder": {
    "allowedAddresses": ["0x06e5B0fd556e8dF43BC45f8343945Fb12C6C3E90"
  }
}
  };

  return Response.json(config);
}
