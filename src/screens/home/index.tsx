import { InputMask } from '@react-input/mask'
import { Input } from '../../components/input'
import { Logo } from '../../components/logo'
import { Title } from '../../components/title'
import {
  Aside,
  Balance,
  ChartAction,
  ChartContainer,
  ChartContent,
  Filters,
  Header,
  InputGroup,
  Main,
  SearchTransaction,
  Section,
  TransactionGroup,
} from './styles'
import { ButtonIcon } from '../../components/button-icon'
import { Card } from '../../components/card'
import { Transaction } from '../../components/transaction'
import { CreateCategoryDialog } from '../../components/create-category-dialog'
import { CreateTransactionDialog } from '../../components/create-transaction-dialog'
import { CategoriesPieChart } from '../../components/categories-pie-chart'
import { FinancialEvolutionBarChart } from '../../components/financial-evolution-bar-chart'

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <CreateTransactionDialog/>
          <CreateCategoryDialog />
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no periodo" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={100000} />
            <Card title="Saldo" amount={100000} variant="incomes" />
            <Card title="Saldo" amount={100000} variant="expenses" />
          </Balance>
          <ChartContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por categoria no periodo"
              />
            </header>
            <ChartContent>
              <CategoriesPieChart/>
            </ChartContent>
          </ChartContainer>
          <ChartContainer>
            <header>
              <Title
                title="Evolucao Financeira"
                subtitle="Saldo, Receitas e Gastos no ano"
              />
              <ChartAction>
                <InputMask
                  component={Input}
                  mask="dd/mm/yyyy"
                  replacement={{ a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </ChartAction>
            </header>
            <ChartContent>
              <FinancialEvolutionBarChart/>
            </ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Title title="Transacoes" subtitle="Movimentacoes no periodo" />
            <SearchTransaction>
              <Input variant="black" placeholder="Procurar transacao..." />
              <ButtonIcon />
            </SearchTransaction>
          </header>
          <TransactionGroup>
            <Transaction
              id={1}
              amount={20000}
              date="09/09/2023"
              category={{ title: 'alimentacao', color: '#ff33bb' }}
              title="mercado"
            />
          </TransactionGroup>
        </Aside>
      </Main>
    </>
  )
}
