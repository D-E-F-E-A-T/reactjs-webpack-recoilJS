import React, { useState, useEffect } from 'react';
import { ButtonToolbar, Card, CardHeader, CardBody, Col, CustomInput, Form, FormFeedback, FormGroup, Label, Input, Row, Badge } from 'reactstrap';
import { Cascader, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import * as Yup from "yup";
import { Formik, withFormik } from "formik";
import 'antd/dist/antd.css';
const nameRegExp = /^(?=.{0,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
            .min(3, `Ít nhất 3 ký tự`)
            .matches(nameRegExp, 'Họ tên không hợp lệ !!!')
            .required('Không được để trống'),
});
const WizardFormTwo = (props) => {
  // const onSubmit = (values, { setSubmitting, setErrors }) => {
  //   console.log(values);
  // };
  const [departmentValues, setDepartmentValue] = useState({value: "", label:"",children:{}});

  useEffect(()=>{ 
    console.log(props.courseNumber);
    setDepartmentValue({...props.prepareDepartmentList[props.prepareDepartmentList.findIndex(i => i.value === props.departmentId)]});
  },[props.departmentId]) 
    return (

    <div>
      <Formik
        initialValues={{
          fullName: ''
        }}
        onSubmit={(values, actions) => {
          console.log(values)
        }}
        validationSchema={SignupSchema} 
        validateOnBlur={true}
        validateOnMount={false}
        vali
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} noValidate name="simpleForm">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="departmentId">Khoa<span className="text-danger">*</span></Label>
                  <Input
                    type="select"
                    name="departmentId"
                    id="departmentId"
                    disabled
                  // onBlur={handleBlur}
                  // invalid={touched.status && !!errors.status}
                  // required value={status}
                  // onChange={e => setStatus(e.target.value)}>
                  >
                  {
                      <option 
                        key={departmentValues.value}
                        value={departmentValues.value}
                        
                        >
                          {departmentValues.label}
                        </option> 
                  }
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="classId">Lớp<span className="text-danger">*</span></Label>
                  <Input
                    type="select"
                    name="classId"
                    id="classId"
                    disabled
                  // onBlur={handleBlur}
                  // invalid={touched.status && !!errors.status}
                  // required value={status}
                  // onChange={e => setStatus(e.target.value)}>
                  >
                    {/* {
                       <option 
                       key={departmentValues.children[parseInt(props.courseNumber) - 1].value}
                        value={departmentValues.value}
                        
                        >
                          {departmentValues.children[parseInt(props.courseNumber) - 1].value}
                        </option> 
                  } */}
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="fullName">Họ và tên<span className="text-danger">*</span> </Label>
                  <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Họ và tên..." 
                    required
                    onChange={props.handleChange}
                    //onBlur={props.handleBlur}
                    value={props.values.name}
                    name="fullName"
                    invalid={ !!props.errors.fullName}
                    valid={props.touched.fullName && !props.errors.fullName}
                    onFocus={props.handleBlur}
                    onBlur={props.handleBlur}
                  />
                  {props.errors.fullName && <FormFeedback >{props.errors.fullName}</FormFeedback>}
                 </FormGroup>

                <FormGroup>
                  <Label for="sex">Giới tính<span className="text-danger">*</span></Label>
                  <Input
                    type="select"
                    name="sex"
                    id="sex"
                  // onBlur={handleBlur}
                  // invalid={touched.status && !!errors.status}
                  // required value={status}
                  // onChange={e => setStatus(e.target.value)}>
                  // {
                  //   PROJECT_STATUS.map((status) =>
                  //     <option key={status.key} value={status.key}>{status.value}</option>)
                  // }
                  >
                     <option key={"NaN"} value={"NaN"}>{"Giới tính"}</option>)
                     <option key={"sex0"} value={0}>{"Nam"}</option>)
                     <option key={"sex1"} value={1}>{"Nữ"}</option>)

                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="dateBirth">Ngày sinh<span className="text-danger">*</span></Label>
                  <Input
                    type="date"
                    id="dateBirth"
                    name="dateBirth"
                    placeholder="Ngày sinh"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="nation">Quốc tịch<span className="text-danger">*</span></Label>
                  <Input
                    type="select"
                    name="nation"
                    id="nation"
                  // onBlur={handleBlur}
                  // invalid={touched.status && !!errors.status}
                  // required value={status}
                  // onChange={e => setStatus(e.target.value)}>
                  // {
                  //   PROJECT_STATUS.map((status) =>
                  //     <option key={status.key} value={status.key}>{status.value}</option>)
                  // }
                  >
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="religion">Dân tộc<span className="text-danger">*</span></Label>
                  <Input
                    type="select"
                    name="religion"
                    id="religion"
                  // onBlur={handleBlur}
                  // invalid={touched.status && !!errors.status}
                  // required value={status}
                  // onChange={e => setStatus(e.target.value)}>
                  // {
                  //   PROJECT_STATUS.map((status) =>
                  //     <option key={status.key} value={status.key}>{status.value}</option>)
                  // }
                  >
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="nation">Thành phố/Tỉnh<span className="text-danger">*</span></Label>
                  <Input
                    type="select"
                    name="nation"
                    id="nation"
                  // onBlur={handleBlur}
                  // invalid={touched.status && !!errors.status}
                  // required value={status}
                  // onChange={e => setStatus(e.target.value)}>
                  // {
                  //   PROJECT_STATUS.map((status) =>
                  //     <option key={status.key} value={status.key}>{status.value}</option>)
                  // }
                  >
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="nation">Quận/Huyện<span className="text-danger">*</span></Label>
                  <Input
                    type="select"
                    name="nation"
                    id="nation"
                  // onBlur={handleBlur}
                  // invalid={touched.status && !!errors.status}
                  // required value={status}
                  // onChange={e => setStatus(e.target.value)}>
                  // {
                  //   PROJECT_STATUS.map((status) =>
                  //     <option key={status.key} value={status.key}>{status.value}</option>)
                  // }
                  >
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label for="nation">Phường/Xã<span className="text-danger">*</span></Label>
                  <Input
                    type="select"
                    name="nation"
                    id="nation"
                  // onBlur={handleBlur}
                  // invalid={touched.status && !!errors.status}
                  // required value={status}
                  // onChange={e => setStatus(e.target.value)}>
                  // {
                  //   PROJECT_STATUS.map((status) =>
                  //     <option key={status.key} value={status.key}>{status.value}</option>)
                  // }
                  >
                  </Input>
                </FormGroup>

              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="">Thôn/Tổ<span className="text-danger">*</span> </Label>
                  <Input
                    type="text"
                    name=""
                    id=""
                    placeholder="Thôn, xóm, tổ..."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>
                <FormGroup>
                  <Label for="fatherName">Họ và tên (Bố)<span className="text-danger">*</span> </Label>
                  <Input
                    type="text"
                    name="fatherName"
                    id="fatherName"
                    placeholder="Họ và tên của bố..."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>

                <FormGroup>
                  <Label for="fatherDateBirth">Năm sinh (Bố)<span className="text-danger">*</span> </Label>
                  <Input
                    type="number"
                    name="fatherDateBirth"
                    id="fatherDateBirth"
                    placeholder="Năm sinh của bố..."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>

                <FormGroup>
                  <Label for="fatherWork">Nghề nghiệp (Bố) </Label>
                  <Input
                    type="text"
                    name="fatherWork"
                    id="fatherWork"
                    placeholder="Nghề nghiệp của bố.."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>


                <FormGroup>
                  <Label for="motherName">Họ và tên (Mẹ)<span className="text-danger">*</span> </Label>
                  <Input
                    type="text"
                    name="motherName"
                    id="motherName"
                    placeholder="Họ và tên của mẹ..."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>

                <FormGroup>
                  <Label for="motherDateBirth">Năm sinh (Mẹ)<span className="text-danger">*</span> </Label>
                  <Input
                    type="number"
                    name="motherDateBirth"
                    id="motherDateBirth"
                    placeholder="Năm sinh của mẹ..."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>

                <FormGroup>
                  <Label for="motherWork">Nghề nghiệp (Mẹ)  </Label>
                  <Input
                    type="text"
                    name="motherWork"
                    id="motherWork"
                    placeholder="Nghề nghiệp của mẹ..."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>

                <FormGroup>
                  <Label for="phoneNumber">Số điện thoại cá nhân   </Label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Số điện thoại cá nhân..."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>

                <FormGroup>
                  <Label for="familyPhoneNumber">Số điện thoại gia đình<span className="text-danger">*</span>  </Label>
                  <Input
                    type="text"
                    name="familyPhoneNumber"
                    id="familyPhoneNumber"
                    placeholder="Số điện thoại gia đình..."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>
                <FormGroup>
                  <Label for="email">Địa chỉ email  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Địa chỉ email..."
                    autoComplete="given-name"
                    // valid={!errors.firstName}
                    // invalid={touched.firstName && !!errors.firstName}
                    required
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.firstName}
                    style={{ height: "32px" }}
                  />
                  {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                </FormGroup>

              </Col>
            </Row>

            <ButtonToolbar className="form__button-toolbar wizard__toolbar" style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" className="wizard_button" onClick={() => props.prevPage()}><LeftOutlined />Quay lại</Button>
              <Button
                className="wizard_button"
                type="primary"
                htmlType="submit"
                disabled={!(props.classId !== '' && props.setDepartmentId !== '' && props.courseNumber !== '')}
                onClick={() => {
                  // props.nextPage();
                }
                }
              >
                Tiếp
       <RightOutlined />
              </Button>
            </ButtonToolbar>
          </Form>
        )}
      </Formik>

    </div >

  );

};

export default WizardFormTwo;
