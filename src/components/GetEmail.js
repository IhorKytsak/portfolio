import { useState } from 'react'
import { useIntl } from 'react-intl'

import { CopyIcon } from '@/components/Icons'
import { EMAIL } from '@/constants/general.const'

export default function GetEmail() {
  const { formatMessage } = useIntl()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      disabled={copied}
      onClick={copyToClipboard}
      className='ml-5 flex items-center text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
    >
      {copied
        ? formatMessage({ id: 'home.copied' })
        : formatMessage({ id: 'home.contact' })}
      <CopyIcon className='w-6 ml-3' />
    </button>
  )
}
