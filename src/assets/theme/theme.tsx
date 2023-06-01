import { TreeItem, treeItemClasses, TreeItemProps } from '@mui/lab'
import {
  alpha,
  createTheme, styled, TableCell, tableCellClasses, TableRow
} from '@mui/material'
import '../theme/constants.scss'
import { BorderAll } from '@mui/icons-material'
const primaryFontSize = 14
export const PrimaryTheme = createTheme({
  palette: {
    text: {
      disabled: '#6b6b6b'
    },
    primary: {
      main: '#dd2126'
    },
    secondary: {
      main: '#000000'
    }
  },
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),

    fontSize: primaryFontSize,
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightBold: 500,
    body1: {
      fontSize: primaryFontSize
    }
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px',
          '&:last-child': {
            paddingBottom: '16px'
          }
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0.05)',
          backgroundColor: 'rgba(0, 0, 0, 0.05)'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '-2px'
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '16px',
          paddingTop: '0'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: '0px'
        }
      }
    }
  }
})

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#323232',
    color: theme.palette.common.white,
    padding: '15px',
    borderLeft: '1px solid',
    borderColor: '#282828'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '15px',
    color: theme.palette.common.white,
    backgroundColor: '#282828',
    borderBottom: '0.01px solid #bfbfbf !important'
  }
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

export const StyledTreeItem = styled((props: TreeItemProps) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <TreeItem {...props} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3
    }
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
  },
  [`& .${treeItemClasses.content}`]: {
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular
    }
  }
}))
