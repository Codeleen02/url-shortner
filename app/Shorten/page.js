"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState('')
  const [shorturl, setshorturl] = useState("")
  const [Generated, setGenerated] = useState("")
  const generate = async () => {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          shorturl,
        }),
      });

      const data = await res.json();
      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`),
        console.log(data);
      alert(data.message)
      console.log(res.status)
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className='border-2 p-5 flex flex-col justify-center w-1/2 mx-auto bg-[#61a1e1] my-5 border-[rgb(97,161,225)]'>
      <h1 className='mx-auto font-bold'>Generate your short URL</h1>
      <div className='flex flex-col my-3'>
        <input className='border-1 my-5 border-[#90afed]' type="text" value={url} placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
        <input className='border-1 border-[#90afed]' value={shorturl} type="text" placeholder='Enter your preferred short URL text' onChange={e => { setshorturl(e.target.value) }} />
        <button onClick={generate}
          className="block mt-5 w-1/2 mx-auto rounded-lg border border-[#8aa9e7] p-2 font-bold transition-all duration-300 hover:bg-[#8aa9e7] hover:text-white hover:scale-105 hover:shadow-lg bg-[#407bbe]"
          type="submit"
        >
          Generate
        </button>
      </div>
      {Generated && <><span className='font-bold text-lg'>
        Your Link:</span><code><Link target="_blank" href={Generated}>{Generated}</Link>
        </code></>}
    </div>
  )
}

export default Shorten
