import React from 'react'
import { StarRating } from './StarRating'
import { render } from '@testing-library/react'
describe('should test starRating', () => {
   it('should test ', () => {
      const onChangeRating = () => {}
      const {} = render(<StarRating onChange={onChangeRating} />)
   })
})
