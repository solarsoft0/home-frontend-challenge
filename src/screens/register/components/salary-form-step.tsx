import React, { FC, FormEvent } from 'react'
import { FormStepsControlButtons, gotoStep } from '@screens/register/components/form-control-buttons'
import { StepProps } from '@screens/register/components/form-steps'


export const SalaryFormStep: FC<StepProps> = (props) => {
  const { currentPage, registrationId } = props

  const nextPage: number = currentPage + 1

  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    gotoStep(nextPage, registrationId)
  }

  return (
    <form id={'salary-step-form'} onSubmit={_handleSubmit}>
      <fieldset>
        <legend id="radiogroup-label" className="sr-only">
          Server size
        </legend>
        <ul className="space-y-4" role="radiogroup" aria-labelledby="radiogroup-label">
          <li
            id="radiogroup-option-0"
            tabIndex={0}
            role="radio"
            aria-checked="true"
            className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Hobby</p>
                  <div className="text-gray-500">
                    <p className="sm:inline">8GB / 4 CPUs</p>
                    <span className="hidden sm:inline sm:mx-1" aria-hidden="true">
                      &middot;
                    </span>
                    <p className="sm:inline">160 GB SSD disk</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                <div className="font-medium text-gray-900">$40</div>
                <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
              </div>
            </div>
            {/*{!--On: 'border-indigo-500', Off: 'border-transparent' --}*/}
            <div
              className="border-indigo-500 absolute inset-0 rounded-lg border-2 pointer-events-none"
              aria-hidden="true"
            />
          </li>

          <li
            id="radiogroup-option-1"
            tabIndex={-1}
            role="radio"
            aria-checked="false"
            className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Startup</p>
                  <div className="text-gray-500">
                    <p className="sm:inline">12GB / 6 CPUs</p>
                    <span className="hidden sm:inline sm:mx-1" aria-hidden="true">
                      &middot;
                    </span>
                    <p className="sm:inline">256 GB SSD disk</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                <div className="font-medium text-gray-900">$80</div>
                <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
              </div>
            </div>
            {/*{!--On: 'border-indigo-500', Off: 'border-transparent' --}*/}
            <div
              className="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
              aria-hidden="true"
            />
          </li>

          <li
            id="radiogroup-option-2"
            tabIndex={-1}
            role="radio"
            aria-checked="false"
            className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Business</p>
                  <div className="text-gray-500">
                    <p className="sm:inline">16GB / 8 CPUs</p>
                    <span className="hidden sm:inline sm:mx-1" aria-hidden="true">
                      &middot;
                    </span>
                    <p className="sm:inline">512 GB SSD disk</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                <div className="font-medium text-gray-900">$160</div>
                <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
              </div>
            </div>
            {/*{!--On: 'border-indigo-500', Off: 'border-transparent' --}*/}
            <div
              className="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
              aria-hidden="true"
            />
          </li>

          <li
            id="radiogroup-option-3"
            tabIndex={-1}
            role="radio"
            aria-checked="false"
            className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Enterprise</p>
                  <div className="text-gray-500">
                    <p className="sm:inline">32GB / 12 CPUs</p>
                    <span className="hidden sm:inline sm:mx-1" aria-hidden="true">
                      &middot;
                    </span>
                    <p className="sm:inline">1024 GB SSD disk</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                <div className="font-medium text-gray-900">$240</div>
                <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
              </div>
            </div>
            {/*{!--On: 'border-indigo-500', Off: 'border-transparent' --}*/}
            <div
              className="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none"
              aria-hidden="true"
            />
          </li>
        </ul>
      </fieldset>
      <FormStepsControlButtons formName={'salary-step-form'} {...props} />
    </form>
  )
}
