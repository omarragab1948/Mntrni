// ** React Imports
import { useContext } from 'react'

// ** Component Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

const CanViewNavGroup = props => {
  // ** Props
  const { children, navGroup } = props
  console.log(props)

  // ** Hook
  const ability = useContext(AbilityContext)

  const checkForVisibleChild = arr => {
    console.log(arr)

    return arr.some(i => {
      if (i.items) {
        return checkForVisibleChild(i.items)
      } else {
        return ability?.can(i.action, i.subject)
      }
    })
  }

  const canViewMenuGroup = item => {
    console.log(item)
    const hasAnyVisibleChild = item.children && checkForVisibleChild(item.children)
    if (!(item.action && item.subject)) {
      return hasAnyVisibleChild
    }

    return ability && ability.can(item.action, item.subject) && hasAnyVisibleChild
  }
  if (navGroup && navGroup.auth === false) {
    return <>{children}</>
  } else {
    return navGroup && canViewMenuGroup(navGroup) ? <>{children}</> : null
  }
}

export default CanViewNavGroup
