import { Button } from 'antd'

function CButton(props) {
  const { type, classNames, onClick } = props
  const btnProps = {
    type,
    ...(classNames && { classNames }),
    onClick,
  }
  return (
    <Button type="primary" {...btnProps}>
      Primary
    </Button>
  )
}

export default CButton
