import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('citas', 'routes/citas.tsx'),
  route('pacientes', 'routes/pacientes.tsx'),
  route('medicos', 'routes/medicos.tsx'),
  route('docs', 'routes/docs.tsx'),
  route('ambulancias', 'routes/ambulancias.tsx'),
] satisfies RouteConfig
