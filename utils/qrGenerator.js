import QRCode from "qrcode";

export async function createQR(studentId){

    return await QRCode.toDataURL(

        `https://your-domain.com/verify/${studentId}`

    );

}
