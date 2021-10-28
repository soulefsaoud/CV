import {MDBRow, MDBCol, MDBInput, MDBBtn} from "mdbreact";


const InfoPersoPage = () => {
    return (
        <div>
            <form
                className='needs-validation'
                noValidate
            >
                <MDBRow>
                    <MDBCol md='4'>
                        <MDBInput
                            icon='user'
                            name='fname'
                            type='text'
                            id='materialFormRegisterNameEx'
                            label='First name'
                            outline
                            required

                        >
                            <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                        </MDBInput>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBInput
                            icon='address-card'
                            name='lname'
                            type='text'
                            id='materialFormRegisterEmailEx2'
                            label='Last name'
                            outline
                            required
                        >
                            <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                        </MDBInput>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBInput
                            icon='envelope-open'
                            type='email'
                            id='materialFormRegisterConfirmEx3'
                            name='email'
                            label='Your Email address'
                            outline
                        >
                            <small id='emailHelp' className='form-text text-muted'>
                                We'll never share your email with anyone else.
                            </small>
                        </MDBInput>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='4'>
                        <MDBInput
                            icon='city'
                            type='text'
                            id='materialFormRegisterPasswordEx4'
                            name='city'
                            label='City'
                            outline
                            required
                        >
                            <div className='invalid-feedback ml-3 pl-3'>
                                Please provide a valid city.
                            </div>
                            <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                        </MDBInput>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBInput
                            icon='map-marked-alt'
                            type='text'
                            id='materialFormRegisterPasswordEx4'
                            name='state'
                            label='State'
                            outline
                            required
                        >
                            <div className='invalid-feedback ml-3 pl-3'>
                                Please provide a valid state.
                            </div>
                            <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                        </MDBInput>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBInput
                            icon='location-arrow'
                            type='text'
                            id='materialFormRegisterPasswordEx4'
                            name='zip'
                            label='Zip'
                            outline
                            required
                        >
                            <div className='invalid-feedback ml-3 pl-3'>
                                Please provide a valid zip.
                            </div>
                            <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                        </MDBInput>
                    </MDBCol>
                </MDBRow>
                <MDBCol md='4' className='mb-3'>
                    <div className='custom-control custom-checkbox pl-3'>
                        <input
                            className='custom-control-input'
                            type='checkbox'
                            value=''
                            id='invalidCheck'
                            required
                        />
                        <label className='custom-control-label' htmlFor='invalidCheck'>
                            Agree to terms and conditions
                        </label>
                        <div className='invalid-feedback'>
                            You must agree before submitting.
                        </div>
                    </div>
                </MDBCol>
                <button color='primary' type='submit'>
                    Submit Form
                </button>

            </form>
        </div>
    );
}

export default InfoPersoPage;