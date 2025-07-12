import { resumeTemplate } from "@/templates/ resume-template";
import { NextRequest,NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req:NextRequest) {
    const formData=await req.json()
    const html=resumeTemplate(formData)

    const browser=await puppeteer.launch({headless:'shell'})
    const page= await browser.newPage()
    await page.setContent(html,{waitUntil:'networkidle0'})
    const pdfBuffer=await page.pdf({format:'A4'})
    await browser.close()

    return new NextResponse(pdfBuffer,{
        headers:{
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=resume.pdf'
        }
    })

    
}