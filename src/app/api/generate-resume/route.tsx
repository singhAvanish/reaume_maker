// import { resumeTemplate } from "@/templates/ resume-template";
// import { NextRequest,NextResponse } from "next/server";
// import puppeteer from "puppeteer";

// export async function POST(req:NextRequest) {
//     const formData=await req.json()
//     const html=resumeTemplate(formData)

//     const browser=await puppeteer.launch({headless:'shell'})
//     const page= await browser.newPage()
//     await page.setContent(html,{waitUntil:'networkidle0'})
//     const pdfBuffer=await page.pdf({format:'A4'})
//     await browser.close()

//     return new NextResponse(pdfBuffer,{
//         headers:{
//             'Content-Type': 'application/pdf',
//             'Content-Disposition': 'attachment; filename=resume.pdf'
//         }
//     })

    
// }
// /app/api/generate-resume/route.ts (or .js)
// import { resumeTemplate } from "@/templates/ResumePDF";
// import { NextResponse } from "next/server";
// import puppeteer from "puppeteer-core";
// import chromium from "chrome-aws-lambda";

// export async function POST(req: Request) {
//   const formData = await req.json();
//   const html = resumeTemplate(formData);

//   const browser = await puppeteer.launch({
//     args: chromium.args,
//     executablePath: await chromium.executablePath,
//     headless: chromium.headless,
//   });

//   const page = await browser.newPage();
//   await page.setContent(html, { waitUntil: "networkidle0" });

//   const pdfBuffer = await page.pdf({ format: "a4" });
//   await browser.close();

//   return new NextResponse(pdfBuffer, {
//     headers: {
//       "Content-Type": "application/pdf",
//       "Content-Disposition": "attachment; filename=resume.pdf",
//     },
//   });
// }

// app/api/generate-resume/route.ts

import { renderToBuffer } from '@react-pdf/renderer';
import ResumePDF from '@/templates/ResumePDF';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.json();

  try {
    const pdfBuffer = await renderToBuffer(<ResumePDF formData={formData} />);
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
      },
    });
  } catch (error) {
    console.error('PDF generation failed:', error);
    return NextResponse.json({ error: 'PDF generation failed' }, { status: 500 });
  }
}


