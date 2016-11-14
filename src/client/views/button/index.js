import Button from '../../../components/button'
import Icon from '../../../components/icon'
import Markdown from '../../components/markdown'
import s from './button.scss'

const ButtonPage = {
  name: 'ButtonPage',

  render(h) {
    return (
      <div>
        <Markdown src={require('./doc.md')} />
        <div class={[s.buttonWrapper]}>
          <Button class={[s.buttonIcon]}>
            <Icon typ="plus" size={16} />
            新增公告
          </Button>
          <Button status="primary">送出</Button>
          <Button status="outline">搜尋</Button>
          <Button status="primaryOutline">關閉</Button>
        </div>
        <span>Disabled buttons</span>
        <div class={[s.buttonWrapper]}>
          <Button disabled={true}>Submit</Button>
          <Button status="primary" disabled={true}>Submit</Button>
          <Button status="primaryOutline" disabled={true}>Submit</Button>
        </div>
        <span>Width-50% button</span>
        <div class={[s.buttonWrapper]}>
          <Button status="primary" class={[s.buttonBig]}>Submit</Button>
        </div>
      </div>
    )
  }
}

module.exports = ButtonPage
