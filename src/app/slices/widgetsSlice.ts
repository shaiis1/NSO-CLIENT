import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createEntityAdapter
  } from '@reduxjs/toolkit'
  import { RootState } from '../store'

  import { addWidget, getWidgetsList, updateWidget, removeWidgetById } from '../apis/widgetsApi'
  
  export interface widgetsType {
    id: string
    name: string
    magicNumber: string
    fields: any
  }
  
  export const widgetsAdapter = createEntityAdapter<widgetsType>({
    selectId: (widget) => widget.id,
    sortComparer: (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
  
  export const widgetsSelectors =
  widgetsAdapter.getSelectors<RootState>((state) => state.widgets)
  
  export const { selectAll, selectById, selectEntities, selectTotal } =
  widgetsSelectors
  
  export const getWidgets = createAsyncThunk(
    'widgets/getWidgets',
    async () => {
      try {
        const res = await getWidgetsList()
        return res//.data
      } catch (err: any) {
        return err.message
      }
    }
  )

  export const saveWidget = createAsyncThunk(
    'widgets/saveWidget',
    async ( {widgetDetails, isEditMode }: any, thunkApi) => {
      try {
        const res = isEditMode ? await updateWidget(widgetDetails) : await addWidget(widgetDetails)
        return res//.data
      } catch (err: any) {
        return err.message
      }
    }
  )
  
  export const removeWidget = createAsyncThunk(
    'widgets/removeWidget',
    async ( {widgetDetails }: any, thunkApi) => {
      try {
        const res = await removeWidgetById(widgetDetails)
        return res//.data
      } catch (err: any) {
        return err.message
      }
    }
  )

  const widgetsSlice = createSlice({
    name: 'customer',
    initialState: widgetsAdapter.getInitialState({
      loading: true,
      error: '',
      widgets: []
    }),
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(getWidgets.pending, (state, action) => {
          state.loading = true
        })
        .addCase(
            getWidgets.fulfilled,
          (state, action: PayloadAction<any>) => {
            state.loading = false
            state.widgets = action.payload
            //widgetsAdapter.setAll(state, action.payload)
          }
        )
        .addCase(saveWidget.pending, (state, action) => {
            state.loading = true
          })
          .addCase(
            saveWidget.fulfilled,
            (state, action: PayloadAction<any>) => {
              state.loading = false
              state.widgets = action.payload
              //widgetsAdapter.setAll(state, action.payload)
            }
          )
          .addCase(removeWidget.pending, (state, action) => {
            state.loading = true
          })
          .addCase(
            removeWidget.fulfilled,
            (state, action: PayloadAction<any>) => {
              state.loading = false
              state.widgets = action.payload
              //widgetsAdapter.setAll(state, action.payload)
            }
          )
    }
  })
  
  export const widgetsState = (state: RootState) => state.widgets
//   export const { deleteInvitation } = widgetsSlice.actions
  export default widgetsSlice.reducer
  