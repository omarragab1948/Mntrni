// ** Custom Menu Components
import VerticalNavLink from './VerticalNavLink'
import VerticalNavGroup from './VerticalNavGroup'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'
import dashboard from '../../../../../../public/images/categories 1.svg'
import spaces from '../../../../../../public/images/categories 2.svg'
import cat3 from '../../../../../../public/images/categories 3.svg'
import cat4 from '../../../../../../public/images/categories 4.svg'
import cat5 from '../../../../../../public/images/categories 5.svg'
import cat6 from '../../../../../../public/images/categories 6.svg'
import cat7 from '../../../../../../public/images/categories 7.svg'

const resolveNavItemComponent = item => {
  console.log(item)

  if (item.sectionTitle) return VerticalNavSectionTitle
  if (item.children) return VerticalNavGroup

  return VerticalNavLink
}

const VerticalNavItems = props => {
  // ** Props

  // const { verticalNavItems } = props
  const verticalNavItems = [
    { icon: dashboard, title: 'Dashboard', path: '/home' },
    {
      icon: spaces,
      title: 'Spaces',
      path: '/spaces'
    },
    { icon: cat3, title: 'Page3', path: '/page3' },
    { icon: cat4, title: 'Page4', path: '/Page4' },
    { icon: cat5, title: 'Page5', path: '/Page5' },
    { icon: cat6, title: 'Page6', path: '/Page6' },
    { icon: cat7, title: 'Sign Out', path: '/sign Out' }
  ]

  const RenderMenuItems = verticalNavItems?.map((item, index) => {
    const TagName = resolveNavItemComponent(item)

    return <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}

export default VerticalNavItems
