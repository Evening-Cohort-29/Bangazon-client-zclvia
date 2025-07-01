import { useEffect, useRef, useState } from 'react'
import { getCategories } from '../data/products'
import { Input, Select } from './form-elements'

export default function Filter({ productCount, onSearch, locations }) {
  const refEls = {
    location: useRef(),
    category: useRef(),
    name: useRef(),
    min_price: useRef(),
    order_by: useRef(),
    direction: useRef(),
    number_sold: useRef(),
  }

  const [showFilters, setShowFilters] = useState(false)
  const [query, setQuery] = useState('')
  const [categories, setCategories] = useState([{id: 1, name: 'Apples'}, {id: 2, name: 'Oranges'}, {id: 3, name: 'Lemons'}])
  const [direction, setDirection] = useState('asc')
  const clear = () => {
    for (let ref in refEls) {
      if (ref === 'direction') {
        refEls[ref].current.checked = false
        setDirection('asc')
      } else if (["min_price", "name"].includes(ref)) {
        refEls[ref].current.value = ""
      }
      else {
        refEls[ref].current.value = 0
      }
    }
    onSearch('')
  }
  const orderByOptions = [
    {
      id: 'price',
      name: 'Price'
    },
    {
      id: 'name',
      name: 'Name'
    }
  ]

  const directionOptions = [
    {
      name: 'direction',
      label: 'asc'
    },
    {
      name: 'direction',
      label: 'desc'
    },
  ]

  useEffect(() => {
    if (query) {
      onSearch(query)
    }
  }, [query])

  const buildQuery = (key, value) => {
    if (value && value !== "0") {
      return `${key}=${value}&`
    }
    return ""
  }

  const filter = () => {
    let newQuery = ""
    for (let refEl in refEls) {
      newQuery += buildQuery(refEl, refEls[refEl].current.value)
    }
    setQuery(newQuery)
  }

  return (
    <div className='level'>
      <div className="level-left">
        <div className="level-item">
          <p className="subtitle is-5">
            <strong>{productCount}</strong> products
          </p>
        </div>
        <div className="level-item">
          <Input
            placeholder="Find a Product"
            id="name"
            refEl={refEls.name}
            addlClass="has-addons"
            extra={
              <p className="control">
                <button className="button is-primary" onClick={filter}>
                  Search
                </button>
              </p>
            }
          />
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <div className={`dropdown is-right ${showFilters ? 'is-active' : ''}`}>
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span>Filter Products</span>
                <span className="icon is-small">
                <i className="fas fa-filter"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <Select
                    refEl={refEls.location}
                    options={locations}
                    title="Filter by Location"
                    addlClass="is-fullwidth"
                  />
                </div>
                <hr className="dropdown-divider"></hr>
                <div className="dropdown-item">
                  <Select
                    refEl={refEls.category}
                    options={categories}
                    title="Filter by Category"
                    addlClass="is-fullwidth"
                  />
                </div>
                <hr className="dropdown-divider"></hr>
                <div className="dropdown-item">
                  <Input
                    type="number"
                    placeholder="Minimum Price"
                    addlClass="is-horizontal"
                    refEl={refEls.min_price}
                  />

                </div>
                <hr className="dropdown-divider"></hr>
                <div className="dropdown-item">
                  <Input
                    type="number"
                    placeholder="Number Sold"
                    addlClass="is-horizontal"
                    refEl={refEls.number_sold}
                  />
                </div>
                <hr className="dropdown-divider"></hr>
                <div className="dropdown-item">
                  <Select
                    refEl={refEls.order_by}
                    options={orderByOptions}
                    title="Order by"
                    addlClass="is-fullwidth"
                  />
                  <div className="field">
                    <div className="control">
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          value={direction}
                          ref={refEls.direction}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setDirection('desc')
                            } else {
                              setDirection('asc')
                            }
                          }}
                        />
                        desc
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="dropdown-divider"></hr>
                <div className="dropdown-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <button className="button is-primary" onClick={filter}>
                        Filter
                      </button>
                    </p>
                    <p className="control">
                      <button className="button is-danger" onClick={clear}>
                        Clear
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
