import { Container, Heading } from '@chakra-ui/layout'
import { useAccount, useMsal } from '@azure/msal-react'

export default function Tasks() {
  const {instance, accounts, inProgress} = useMsal()
  const account = useAccount(accounts[0] || {})
  return (
    <Container>
      <Heading mt={4}>タスクページ</Heading>
    </Container>
  )
}
