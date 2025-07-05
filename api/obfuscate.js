const obfuscator = require('javascript-obfuscator');

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    try {
        const kode = req.body || "";
        const hasil = obfuscator.obfuscate(kode, {
            compact: true,
            controlFlowFlattening: true,
            debugProtection: true,
            stringArray: true,
            stringArrayEncoding: ['base64']
        }).getObfuscatedCode();

        res.status(200).send(hasil);
    } catch (e) {
        res.status(500).send("Error: " + e.message);
    }
}
